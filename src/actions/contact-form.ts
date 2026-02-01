'use server'

const action = async (
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/contact`, {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()

    if (!res.ok) {
      return { success: false, message: data.message }
    }

    return { success: true, message: 'Thanks! I will contact you soon.' }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
    }
  }
}

export default action
