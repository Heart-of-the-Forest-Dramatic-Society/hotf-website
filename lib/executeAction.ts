import { isRedirectError } from "next/dist/client/components/redirect-error";

type Options<T> = {
  actionFn: () => Promise<T>;
};

const executeAction = async <T>({
  actionFn,
}: Options<T>): Promise<T> => {
  try {
    const result = await actionFn();
    return result;
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    // Re-throw the error to allow proper error handling
    throw error;
  }
};

export { executeAction };
