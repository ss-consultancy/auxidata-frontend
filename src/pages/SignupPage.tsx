import SignupForm from '../components/SignupForm'
import SignupVisualPanel from '../components/SignupVisualPanel'

function SignupPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-[minmax(560px,45%)_1fr]">
        <section className="flex justify-center px-6 py-8 sm:px-12 lg:px-16">
          <SignupForm />
        </section>

        <SignupVisualPanel />
      </div>
    </main>
  )
}

export default SignupPage