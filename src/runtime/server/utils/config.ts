//@ts-ignore
import { useRuntimeConfig } from "#imports";
import type { PrivateConfig, PublicConfig } from "../../types";

export const privateConfig = useRuntimeConfig().fcm as PrivateConfig;
export const publicConfig = useRuntimeConfig().public.fcm as PublicConfig;
