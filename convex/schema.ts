import { defineSchema, defineTable } from "convex/server";
import { v } from 'convex/values'; 
import { userAgent } from "next/server";

export default defineSchema({
   user: defineTable({
     name: v.string(),
     email: v.string(),
     image: v.optional(v.string()),
     clerkId: v.string(),
   }).index("by_clerkId", ["clerkId"]),

   plans: defineTable({
    userId: v.id("users"), 
    name: v.string(), 
    workoutPlan: v.object({
        schedule: v.array(v.string()),
        exercises: v.array(v.object({
            day: v.string(), 
            routine: v.array(v.object({
                name: v.string(),
                sets: v.optional(v.number()),
                reps: v.optional(v.number()),
                duration: v.optional(v.string()),
                descritpion: v.optional(v.string()),
                exercises: v.optional(v.array(v.string())), 
            })),
        })),
    }), 
    
    dietPlan: v.object({
        dailyCalories: v.number(),
        meals: v.array(v.object({
            name: v.string(),
            foods: v.array(v.string()), 
        }))
   }),
   isActive: v.boolean(),
 })
   .index("by_userId", ["userId"])
   .index("by_active", ["isActive"]),
});