"use client";

import { useNewSong } from "@/hooks/useNewSong";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { Plus, X } from "lucide-react";
import { NoteButton, notes } from "./NoteButton";

export default function NewSong({
  isOpen,
  changeIsOpen,
}: {
  isOpen: boolean;
  changeIsOpen: (value: boolean) => void;
}) {
  const {
    handleChangeNote,
    note,
    handleSubmit,
    onSubmit,
    register,
    setValue,
    formState,
    creating,
  } = useNewSong({ changeIsOpen });

  return (
    <Dialog open={isOpen}>
      <DialogTrigger onClick={() => changeIsOpen(true)} asChild>
        <Button
          variant="outline"
          size="lg"
          className="w-full max-w-screen-sm mt-8"
        >
          <Plus />
          <span className="ml-2">Nova música</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-max">
        <DialogHeader>
          <DialogTitle>Nova música</DialogTitle>
        </DialogHeader>
        <DialogClose
          className="absolute right-4 top-4"
          onClick={() => changeIsOpen(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 mt-8 w-full">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                placeholder="Digite o título"
                {...register("title")}
              />
              {formState.errors.title?.message && (
                <p className="text-sm text-red-400">
                  {formState.errors.title?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Instruções</Label>
              <Input
                id="description"
                placeholder="Digite as instruções"
                {...register("description")}
              />
              {formState.errors.description?.message && (
                <p className="text-sm text-red-400">
                  {formState.errors.description?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Tom</Label>

              {formState.errors.note?.message && (
                <p className="text-sm text-red-400">
                  {formState.errors.note?.message}
                </p>
              )}

              <input {...register("note")} className="hidden" />

              <div className="w-full flex flex-col gap-4">
                <div className="w-full flex gap-2 flex-wrap">
                  {notes.major.map((item) => (
                    <NoteButton
                      key={item}
                      value={item}
                      onClick={(value) => {
                        handleChangeNote(value);
                        setValue("note", value);
                      }}
                      selected={item === note}
                      borderColor="#f87171"
                    />
                  ))}
                </div>
                <div className="w-full flex gap-2 flex-wrap">
                  {notes.majorSustenido.map((item) => (
                    <NoteButton
                      key={item}
                      value={item}
                      onClick={(value) => {
                        handleChangeNote(value);
                        setValue("note", value);
                      }}
                      selected={item === note}
                      borderColor="#fbbf24"
                    />
                  ))}
                </div>
                <div className="w-full flex gap-2 flex-wrap">
                  {notes.minus.map((item) => (
                    <NoteButton
                      key={item}
                      value={item}
                      onClick={(value) => {
                        handleChangeNote(value);
                        setValue("note", value);
                      }}
                      selected={item === note}
                      borderColor="#60a5fa"
                    />
                  ))}
                </div>
                <div className="w-full flex gap-2 flex-wrap">
                  {notes.minusSustenido.map((item) => (
                    <NoteButton
                      key={item}
                      value={item}
                      onClick={(value) => {
                        handleChangeNote(value);
                        setValue("note", value);
                      }}
                      selected={item === note}
                      borderColor="#c084fc"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="mt-8">
            <Button type="submit" disabled={creating}>
              {creating ? "Salvando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
