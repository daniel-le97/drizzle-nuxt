CREATE TABLE IF NOT EXISTS "todos" (
	"id" "char" PRIMARY KEY NOT NULL,
	"task" text,
	"completed" boolean DEFAULT false,
	"createdAt" timestamp with time zone DEFAULT now(),
	"updatedAt" timestamp with time zone DEFAULT now(),
	"userId" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "authors";--> statement-breakpoint
DROP TABLE "books";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "todos" ADD CONSTRAINT "todos_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
