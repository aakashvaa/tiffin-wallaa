// utils/forceSessionUpdate.ts
export async function forceSessionUpdate() {
  const csrf = await fetch('/api/auth/csrf');
  const { csrfToken } = await csrf.json();

  await fetch('/api/auth/session?update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ csrfToken }),
  });
}
