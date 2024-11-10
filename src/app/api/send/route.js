// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// // Ensure the API key is available
// const resendApiKey = process.env.RESEND_API_KEY;
// const fromEmail = process.env.FROM_EMAIL;

// if (!resendApiKey || !fromEmail) {
//   throw new Error("Missing required environment variables: RESEND_API_KEY and/or FROM_EMAIL");
// }

// const resend = new Resend(resendApiKey);

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);

//   try {
//     // Manually create the HTML content for the email
//     const htmlContent = `
//       <html>
//         <body>
//           <h1>${subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>${message}</p>
//         </body>
//       </html>
//     `;

//     // Send the email via Resend API
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       html: htmlContent,  // Use the HTML content directly
//     });

//     // Return the response from Resend
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ error: error.message });
//   }
// }

// console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
// console.log('FROM_EMAIL:', process.env.FROM_EMAIL);

