interface TodoModel {
    id: string;
    content: string;
    isComplete: boolean;
    timeCreated?: string;
    timeCompleted?: string;
}

export default TodoModel;