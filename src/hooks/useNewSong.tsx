import { useState } from "react";
import { useSongs } from "./useSongs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "O título é obrigatório" }),
  description: z.string().optional(),
  note: z.string().min(1, { message: "O tom é obrigatório" }),
});

type FormData = z.infer<typeof schema>;

export function useNewSong({
  changeIsOpen,
}: {
  changeIsOpen: (value: boolean) => void;
}) {
  const [note, setNote] = useState<string>("");

  const { createSong, creating } = useSongs({ fetchEnable: false });

  const handleChangeNote = (newNote: string) => {
    setNote(newNote);
  };

  const { register, handleSubmit, formState, setValue, reset } =
    useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        title: "",
        description: "",
        note: "",
      },
    });

  const onClose = () => {
    reset({ description: "", note: "", title: "" });
    handleChangeNote("");
  };

  const onSubmit = (data: FormData) => {
    createSong({
      title: data.title,
      description: data.description,
      note: data.note,
    });
    onClose();
    changeIsOpen(false);
  };

  return {
    note,
    handleChangeNote,
    handleSubmit,
    onSubmit,
    creating,
    register,
    formState,
    setValue,
  };
}
