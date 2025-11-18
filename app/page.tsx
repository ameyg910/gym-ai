"use client"
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react"

const Homepage = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}
export default Homepage