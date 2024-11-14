// createUser.ts
import bcrypt from 'bcryptjs';
const prisma = require('../app/utils/db'); 

async function createTestUser() {
  const email = 'Hadis@gmail.com'; // เปลี่ยนอีเมลถ้าต้องการ
  const password = 'your-password'; // เปลี่ยนรหัสผ่านถ้าต้องการ

  // เข้ารหัสรหัสผ่านด้วย bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  // สร้างผู้ใช้ใหม่ในฐานข้อมูล
  await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
      role: 'user', // หรือกำหนด role อื่นตามที่ต้องการ
    },
  });

  console.log('User created:', email);
}

createTestUser()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
