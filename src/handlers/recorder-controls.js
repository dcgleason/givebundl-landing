export async function startRecording(setRecorderState) {
  if (recordingInProgress) {

    alert("Recording already in progress");

    return

  }


  setRecordingInProgress(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  
      setRecorderState((prevState) => {
        return {
          ...prevState,
          initRecording: true,
          mediaStream: stream,
        };
      });
    } catch (err) {
      console.log(err);
    }
    
    
  }

export function saveRecording(recorder) {
  if (recorder.state !== "inactive") recorder.stop();
}
