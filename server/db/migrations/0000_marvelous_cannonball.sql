CREATE TABLE IF NOT EXISTS "authors" (
	"id" "char" PRIMARY KEY NOT NULL,
	"firstName" text,
	"lastName" text,
	"createdAt" timestamp with time zone DEFAULT now(),
	"updatedAt" timestamp with time zone DEFAULT now(),
	CONSTRAINT "authors_firstName_lastName_unique" UNIQUE("firstName","lastName")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "books" (
	"id" "char" PRIMARY KEY NOT NULL,
	"title" text,
	"authorId" text,
	"createdAt" timestamp with time zone DEFAULT now(),
	"updatedAt" timestamp with time zone DEFAULT now(),
	CONSTRAINT "books_title_authorId_unique" UNIQUE("title","authorId")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "books" ADD CONSTRAINT "books_authorId_authors_id_fk" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
