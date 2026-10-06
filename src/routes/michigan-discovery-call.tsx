import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/michigan-discovery-call')({
  beforeLoad: () => {
    throw redirect({
      to: '/book-free-assessment-call',
      replace: true,
    })
  },
});
