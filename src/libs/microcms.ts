import type {
  MicroCMSQueries,
  MicroCMSListContent,
  MicroCMSImage,
} from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: import.meta.env.MICROCMS_API_KEY || "",
});

export type Blog = {
  title: string;
  description: string;
  content: string;
  category: Category[];
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export interface Settings {
  title: string;
  description: string;
  about: string;
}

const DEFAULT_SETTINGS: Settings = {
  title: "Set Your Title Here",
  description: "Set Your Description Here",
  about: "Set Your Text Here",
};

export const getBlogList = async (queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({ endpoint: "blog", queries });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId,
    queries,
  });
};

export const getCategoryList = async (queries?: MicroCMSQueries) => {
  return client.getList<Category>({ endpoint: "categories", queries });
};

export const getSettings = async (): Promise<Settings> => {
  try {
    const data = await client.get({ endpoint: "settings" });
    return data as Settings;
  } catch (error: any) {
    return DEFAULT_SETTINGS;
  }
};
