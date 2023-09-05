import axios from "axios";
import { API_URL } from "utils/types/common/constants";

export const apiClient = axios.create({ baseURL: API_URL });
