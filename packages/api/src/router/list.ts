import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const listRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.listing.findMany(); // changed from post to listing
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.listing.findFirst({ where: { id: input } }); // changed from post to listing
  }),
  create: protectedProcedure
    .input(
      z.object({
        propertyId: z.string(),
        jobType: z.string(),
        contractorType: z.string(),
        reacurring: z.boolean(),
        readyToHire: z.boolean(),
        budget: z.number(), // changed from string to number
        title: z.string(),
        description: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.listing.create({ data: input }); // changed from post to listing
    }),
});
