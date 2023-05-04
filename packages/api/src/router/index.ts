import { router } from "../trpc";
import { postRouter } from "./post";
import { authRouter } from "./auth";
import { propertyRouter } from "./property";

export const appRouter = router({
  post: postRouter,
  auth: authRouter,
  property: propertyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
