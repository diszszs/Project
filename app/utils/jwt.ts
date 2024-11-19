import jwt from "jsonwebtoken";

// JWT Token Generator
export const generateToken = (user: { id: number; email: string; firstName: string; lastName: string; role: string }) => {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );
};

// JWT Token Verifier
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded; // Return decoded token (user info)
  } catch (error) {
    console.error('Invalid or expired token');
    return null; // Return null if token is invalid or expired
  }
};
