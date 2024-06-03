import { IUser } from "@/types/entity";
import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage<IUser | null>("user", null)