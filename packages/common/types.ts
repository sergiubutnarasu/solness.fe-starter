export type FetchOptions = {
  data?: unknown;
  authorization?: string;
  contentType?: string;
  onComplete?: () => void;
  onError?: (error: unknown) => void;
};
