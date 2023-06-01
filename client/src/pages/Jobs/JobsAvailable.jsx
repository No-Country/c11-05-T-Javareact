import CardJob from '../../components/Card/CardJob'
import { tasks } from '../../constants/tasks'

const JobsAvailable = () => {
  return (
    <div className='m-auto mb-10'>
        {tasks.map((task) => (
            <CardJob
                key={task.title}
                title={task.title}
                profesion={task.profesion}
                entreCalle={task.entreCalle}
                numero={task.numero}
                localidad={task.localidad}
                detalle={task.detalle}
            />
        ))}
    </div>
  )


}


export default JobsAvailable
