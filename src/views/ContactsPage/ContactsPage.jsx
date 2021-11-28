import { Container, Section, AddContactForm } from 'components';

export function ContactsPage() {
  return (
    <Container>
      <h1>Your Contacts</h1>
      <Section>
        <AddContactForm />
      </Section>
    </Container>
  );
}
