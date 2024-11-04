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

export function useEditSong({
  changeIsOpen,
  songData,
}: {
  changeIsOpen: (value: boolean) => void;
  songData: {
    id: string;
    title: string;
    description?: string | null;
    note: string;
  };
}) {
  const [note, setNote] = useState<string>(songData.note);

  const { updateSong, updating } = useSongs({ fetchEnable: false });

  const handleChangeNote = (newNote: string) => {
    setNote(newNote);
  };

  const { register, handleSubmit, formState, setValue, reset } =
    useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        title: songData.title,
        description: songData.description || "",
        note: songData.note,
      },
    });

  const onClose = () => {
    reset({ description: "", note: "", title: "" });
    handleChangeNote("");
  };

  const onSubmit = (data: FormData) => {
    updateSong({
      id: songData.id,
      data: {
        title: data.title,
        description: data.description,
        note: data.note,
      },
    });
    onClose();
    changeIsOpen(false);
  };

  return {
    note,
    handleChangeNote,
    handleSubmit,
    onSubmit,
    updating,
    register,
    formState,
    setValue,
  };
}
