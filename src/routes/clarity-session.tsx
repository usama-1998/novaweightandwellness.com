import { createFileRoute, redirect } from '@tanstack/react-router';

// The separate Clarity Session offer has been retired. Keep the old URL working
// by sending visitors to the free assessment call page.
export const Route = createFileRoute('/clarity-session')({
  beforeLoad: () => {
    throw redirect({ to: '/book-free-assessment-call', statusCode: 301 });
  },
});
