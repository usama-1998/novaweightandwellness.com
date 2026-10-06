import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/michigan-discovery-call')({
  beforeLoad: () => {
    throw redirect({
      to: '/free-call-with-katie',
      replace: true,
    })
  },
});
