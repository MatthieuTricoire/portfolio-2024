export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    console.log(error.message);
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    console.log(error.message);
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
