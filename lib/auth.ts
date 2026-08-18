import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const DEMO_USERS = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john.doe@skillready.ai",
    password: "skillready2026",
    initials: "JD",
    role: "L1 Learner — AI & Cloud Architecture",
    org: "Apex Technologies Pvt Ltd",
    cohort: "Cohort Alpha — Batch 2026",
    memberSince: "Mar 2026",
    credentialId: "SKILL-IISA-26-0847",
  },
  {
    id: "user-2",
    name: "Jane Doe",
    email: "jane.doe@skillready.ai",
    password: "skillready2026",
    initials: "JD",
    role: "L1 Learner — Full-Stack & DevOps",
    org: "Horizon Tech Labs",
    cohort: "Cohort Beta — Batch 2026",
    memberSince: "Feb 2026",
    credentialId: "SKILL-FSD-26-0412",
  },
  {
    id: "user-3",
    name: "John Doe",
    email: "student@skillready.ai",
    password: "skillready2026",
    initials: "JD",
    role: "Student Learner",
    org: "National Institute of Technology",
    cohort: "Cohort Alpha — Batch 2026",
    memberSince: "Jan 2026",
    credentialId: "SKILL-STU-26-1092",
  },
];

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "skillready-auth-secret-key-2026-production",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john.doe@skillready.ai" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const emailClean = credentials.email.trim().toLowerCase();
        const found = DEMO_USERS.find(
          (u) =>
            u.email.toLowerCase() === emailClean &&
            (u.password === credentials.password || credentials.password === "password123" || credentials.password === "skillready2026")
        );

        if (found) {
          return {
            id: found.id,
            name: found.name,
            email: found.email,
            initials: found.initials,
            role: found.role,
            org: found.org,
            cohort: found.cohort,
            memberSince: found.memberSince,
            credentialId: found.credentialId,
          } as any; // eslint-disable-line @typescript-eslint/no-explicit-any
        }

        // Fallback for any other valid @skillready.ai or general demo email for testing flexibility
        if (emailClean.includes("@") && credentials.password.length >= 4) {
          const defaultName = emailClean.startsWith("jane") ? "Jane Doe" : "John Doe";
          const defaultInitials = emailClean.startsWith("jane") ? "JD" : "JD";
          return {
            id: "user-custom",
            name: defaultName,
            email: emailClean,
            initials: defaultInitials,
            role: "L1 Learner — Applied Engineering",
            org: "SkillReady Partner Network",
            cohort: "Cohort Alpha — Batch 2026",
            memberSince: "2026",
            credentialId: "SKILL-DEV-26-9901",
          } as any; // eslint-disable-line @typescript-eslint/no-explicit-any
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role; // eslint-disable-line @typescript-eslint/no-explicit-any
        token.org = (user as any).org; // eslint-disable-line @typescript-eslint/no-explicit-any
        token.cohort = (user as any).cohort; // eslint-disable-line @typescript-eslint/no-explicit-any
        token.initials = (user as any).initials; // eslint-disable-line @typescript-eslint/no-explicit-any
        token.memberSince = (user as any).memberSince; // eslint-disable-line @typescript-eslint/no-explicit-any
        token.credentialId = (user as any).credentialId; // eslint-disable-line @typescript-eslint/no-explicit-any
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id; // eslint-disable-line @typescript-eslint/no-explicit-any
        (session.user as any).role = token.role; // eslint-disable-line @typescript-eslint/no-explicit-any
        (session.user as any).org = token.org; // eslint-disable-line @typescript-eslint/no-explicit-any
        (session.user as any).cohort = token.cohort; // eslint-disable-line @typescript-eslint/no-explicit-any
        (session.user as any).initials = token.initials; // eslint-disable-line @typescript-eslint/no-explicit-any
        (session.user as any).memberSince = token.memberSince; // eslint-disable-line @typescript-eslint/no-explicit-any
        (session.user as any).credentialId = token.credentialId; // eslint-disable-line @typescript-eslint/no-explicit-any
      }
      return session;
    },
  },
};
