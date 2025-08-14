import axios from "axios";
import { OnboardInput } from "./validation";

const ENDPOINT = process.env.NEXT_PUBLIC_ONBOARD_URL;

if (!ENDPOINT) {
  console.warn("NEXT_PUBLIC_ONBOARD_URL is not set. Set it in .env");
}

export async function submitOnboard(data: OnboardInput) {
  const url = ENDPOINT as string;
  const res = await axios.post(url, data, {
    headers: { "Content-Type": "application/json" },
    validateStatus: () => true, 
  });
  return res;
}