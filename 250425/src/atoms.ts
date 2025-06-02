import { atom, selector } from "recoil";

export enum Categorys {
  "TODO",
  "DOING",
  "DONE",
}

// type categories = "TODO" | "DOING" | "DONE";

export interface IToDo {
  id: number;
  text: string;
  category: Categorys;
}

export const categoryState = atom<Categorys>({
  key: "category",
  default: Categorys.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.Categorys === "TODO"),
      toDos.filter((toDo) => toDo.Categorys === "DOING"),
      toDos.filter((toDo) => toDo.Categorys === "DONE"),
    ];
  },
});
