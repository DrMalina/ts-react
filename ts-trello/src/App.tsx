import React from 'react';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext';
import { Column } from './Column';
import CustomDragLayer from './CustomDragLayer';
import { DragItem } from './DragItem';
import { AppContainer } from './styles';

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
  draggedItem?: DragItem | undefined;
}

const App = () => {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: 'ADD_LIST', payload: text })}
      />
    </AppContainer>
  );
};

export default App;
