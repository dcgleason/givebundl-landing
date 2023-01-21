import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "../../hooks/use-recordings-list";


export default function RecordingsList({ audio, setAudioRecorded }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
    <div className="flex flex-col">
      {recordings.length > 0 ? (
        <>
          <h1 className="text-2xl">Your recording</h1>
          <div className="flex flex-col">
          
            {recordings.map((record) => (
            <div className="my-4 flex space-x-4" key={record.key}>
            <audio className="w-full" controls src={record.audio} playsinline />
            <div className="ml-auto">
              <button
                className="bg-red-500 text-white rounded-md p-2"
                title="Delete this audio"
                onClick={() => {
                  deleteAudio(record.key);
                  setAudioRecorded(false);
                console.log('deletedRecording')}}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center space-x-4">
          <span className="text-l">(Click on the blue microphone to record your message)</span>
          <FontAwesomeIcon icon={faExclamationCircle} size="2x" color="#f2ea02" />
        </div>
      )}
    </div>
  );
}