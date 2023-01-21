import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "../../hooks/use-recordings-list";


export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);


  console.log('recordings' + recordings);

  return (
    <div className="flex flex-col">
      {recordings.length > 0 ? (
        <>
          <h1 className="text-2xl">Your recordings</h1>
          <div className="flex flex-col">
          
            {recordings.map((record) => (
              <div className="my-4" key={record.key}>
                <audio className="w-full" controls src={record.audio} />
                <div className="ml-auto">
                  <button
                    className="bg-red-500 text-white rounded-md p-2"
                    title="Delete this audio"
                    onClick={() => {deleteAudio(record.key)}}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faExclamationCircle} size="2x" color="#f2ea02" />
          <span className="text-xl">(You have yet to record a message)</span>
        </div>
      )}
    </div>
  );
}