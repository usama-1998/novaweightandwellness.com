import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/michigan-discovery-call')({
  beforeLoad: () => {
    throw redirect({
      to: '/free-15-min-call-with-katie',
      replace: true,
    })
  },
});
