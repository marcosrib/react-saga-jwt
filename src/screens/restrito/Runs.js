import React from 'react'
import ActionsCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'
import Duration from '../elements/Duration'
import Distance from '../elements/Distance'
import DateStr from '../elements/DateStr'

class Runs extends React.Component {
    componentDidMount() {
        this.props.load();
    }

    renderRun(run) {
        return (
            <Table.Row key={run.id}>
                <Table.Cell>
                    {run.friendly_name}
                </Table.Cell>
                <Table.Cell>
                    <Duration duration={run.duration} />
                </Table.Cell>
                <Table.Cell>
                   <Distance distance={run.distance} metric={'metric'}/>
                </Table.Cell>
                <Table.Cell>
                   <DateStr date={run.created} timezone={'America/Sao_Paulo'}/>
                </Table.Cell>
            </Table.Row>
        )
    }
    render() {
        console.log(this.props.runs.data);
        const run = {
            friendly_name: 'run de test',
            duration: 100,
            distance: 100,
            created: '2019-01-01 00:00:00'
        }
        return (


            <div>
                <h1>Corridas</h1>
                <Button onClick={() => this.props.create(run)}>Create run</Button>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Duração</Table.HeaderCell>
                            <Table.HeaderCell>Distância</Table.HeaderCell>
                            <Table.HeaderCell>Data</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.runs.data.map(run => this.renderRun(run))}
                    </Table.Body>
                </Table>
            </div>

        )
    }
}

const mapStateToprops = state => {
    return {
        runs: state.runs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(ActionsCreators.getRunsRequest()),
        create: (run) => dispatch(ActionsCreators.createRunRequest(run))
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(Runs)