import { contactFormSchema } from '@/app/utils/validation';

/**
 * POST /api/contact
 * Handles contact form submissions
 * Validates data with Zod schema before processing
 */
export async function POST(request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactFormSchema.parse(body);

    // Here you would typically:
    // 1. Send email notification
    // 2. Store in database
    // 3. Integrate with email service (SendGrid, Mailgun, etc.)

    // For now, just return success
    console.log('Contact form submission:', validatedData);

    return Response.json(
      {
        success: true,
        message: 'Message received! I\'ll get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ZodError') {
      return Response.json(
        {
          success: false,
          error: 'Validation failed',
          details: error.errors,
        },
        { status: 400 }
      );
    }

    // Handle unexpected errors
    console.error('Contact form error:', error);
    return Response.json(
      {
        success: false,
        error: 'Failed to process request',
      },
      { status: 500 }
    );
  }
}

// Optional: Handle other HTTP methods
export async function OPTIONS() {
  return Response.json({}, { status: 200 });
}
