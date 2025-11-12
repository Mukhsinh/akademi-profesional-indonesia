'use server'

import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  service_type: string
  message: string
}) {
  try {
    // Save to database first
    const supabase = await createServerSupabaseClient()
    
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([{
        ...formData,
        status: 'new'
      }])

    if (error) {
      console.error('Database error:', error)
      return { success: false, error: 'Failed to save inquiry' }
    }

    // Here you would typically send an email using a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - Supabase Edge Functions
    
    // For now, we'll just log the email content
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service_type: formData.service_type,
      message: formData.message,
      timestamp: new Date().toISOString(),
      forward_to: 'akademiprofesional@gmail.com'
    }

    console.log('Contact inquiry received:', payload)

    // In a real implementation, you would send an email like this:
    /*
    const emailContent = {
      to: 'akademiprofesional@gmail.com',
      from: 'noreply@akademiprofesional.id',
      subject: `New Contact Inquiry from ${formData.name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Service Type:</strong> ${formData.service_type}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><em>This inquiry was received at ${new Date().toLocaleString('id-ID')}</em></p>
      `
    }
    
    // Send email using your preferred service
    await sendEmail(emailContent)
    */

    return { success: true, message: 'Inquiry submitted successfully' }
  } catch (error) {
    console.error('Error sending contact email:', error)
    return { success: false, error: 'Failed to submit inquiry' }
  }
}

// Example function for sending emails (implement with your preferred service)
async function sendEmail(content: {
  to: string
  from: string
  subject: string
  html: string
}) {
  // Implementation depends on your email service
  // Example with Resend:
  /*
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  const { data, error } = await resend.emails.send({
    from: content.from,
    to: content.to,
    subject: content.subject,
    html: content.html,
  })

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`)
  }

  return data
  */
}
