
import {serial, pgTable,text,varchar } from "drizzle-orm/pg-core";

export const MockeInterview = pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExprience:varchar('jobExprience').notNull(),
    createdBy:varchar('created by').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
  

})