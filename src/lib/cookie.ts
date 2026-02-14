type PartitionedCookieConstraint =
  | {
      partitioned: true;
      secure: true;
    }
  | {
      partitioned?: boolean;
      secure?: boolean;
    };

export type CookieOptions = {
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  maxAge?: number;
  path?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
  partitioned?: boolean;
  priority?: "Low" | "Medium" | "High";
} & PartitionedCookieConstraint;
