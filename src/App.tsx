import React, {useState} from 'react';
import './App.css';

function App() {
  const [meetingNotes, setMeetingNotes] = useState<any[]>([]);
  const [newNote, setNewNote] = useState<string>('');
  const [newEst, setNewEst] = useState<string>('');
  const [newDesc, setNewDesc] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);

  function addMeetingNote() {
    if (newNote && newEst && newDesc) {
      setMeetingNotes((meetingNotes) => [...meetingNotes, {id: (Math.random()*100)/Math.random(), note: newNote, est: newEst, desc: newDesc}]);
      setNewNote('');
      setNewEst('');
      setNewDesc('');
    }
  }

  function deleteNote(id: number) {
    const newnotes = meetingNotes.filter((note) => {
      return note.id !== id
    });
    setMeetingNotes(newnotes);
  }
  return (
    <div className="App transition-all duration-500 ease-in p-10 flex flex-col w-128">   
      <div className='w-64 m-auto'>
        {meetingNotes.map((meetingNote, i) => {
          return (
            <div className='text-lg text-blue-300 mb-4' key={i}>
              <div className="bg-white rounded shadow border p-6 pt-0 w-64">
                {editMode && <div>
                  <button 
                    onClick={() => deleteNote(meetingNote.id)}
                    className='text-sm text-white mr-0 mt-4 rounded hover:rounded-xl transition-all delay-50 duration-300 ease-in-out py-0 pb-1 px-2 bg-red-300'    
                  >
                    x
                  </button>
                </div>}
                <div className='flex m-auto justify-between w-full'>
                  <div contentEditable={editMode} className="max-width title resize-none text-lg text-blue-400 w-fit">{meetingNote.note}</div>
                  <div contentEditable={editMode} className="max-width estimate resize-none text-slate-300 text-sm w-fit">{meetingNote.est}</div>
                </div>
                <div contentEditable={!editMode} className="max-width-desc mt-4 resize-none text-blue-300 text-sm">{meetingNote.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
      <form>
        <div>
          <label htmlFor='newMeetingNote' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Meeting Note
          </label>
          <input 
            type="text" 
            id="newMeetingNote" 
            className="w-64 m-auto bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="New Note"
            value={newNote}
            onChange={(e) => {
              setNewNote(e.target.value);
            }}
          >
          </input>
        </div>
        <div>
          <label htmlFor='Estimated Time' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Estimated Time
          </label>
          <input 
            type="text" 
            id="Estimated Time" 
            className="w-64 m-auto bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Estimated Time"
            value={newEst}
            onChange={(e) => {
              setNewEst(e.target.value);
            }}
          >
          </input>
        </div>
        <div>
          <label htmlFor='description' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Description
          </label>
          <input 
            type="text" 
            id="description" 
            className="w-64 m-auto bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Description"
            value={newDesc}
            onChange={(e) => {
              setNewDesc(e.target.value);
            }}
          >
          </input>
        </div>
      </form>
      <div className='flex m-auto w-64 mt-8'>
        <button 
          className='m-auto   rounded hover:rounded-xl transition-all delay-50 duration-300 ease-in-out py-2 px-4 bg-slate-300'
          onClick={addMeetingNote}
        >
          Add
        </button>
        <button 
          className='m-auto   rounded hover:rounded-xl transition-all delay-50 duration-300 ease-in-out py-2 px-4 bg-blue-300'
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default App;
