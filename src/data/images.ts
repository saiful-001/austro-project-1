// Replace any ID/URL here to change photography site-wide (Unsplash CDN).
const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const img = {
  hero: u('photo-1522071820081-009f0129c71c', 1400),
  about: u('photo-1542744173-8e7e53415bb0', 1200),
  aboutDetail: u('photo-1497366216548-37526070297c', 800),
  contact: u('photo-1558769132-cb1aea458c5e', 1400),
  morrow: u('photo-1503602642458-232111445657'),
  soleil: u('photo-1596462502278-27bfdc403348'),
  forma: u('photo-1600585154340-be6161a56a0c', 1600),
  ritual: u('photo-1541643600914-78b084683601'),
  parallel: u('photo-1581291518857-4e27b48ff24e'),
  sunday: u('photo-1523381210434-271e8be1f52b'),
  j1: u('photo-1586023492125-27b2c045efd7', 900),
  j2: u('photo-1618221195710-dd6b41faaea6', 900),
  j3: u('photo-1522202176988-66273c2fd55f', 900),
  team1: u('photo-1534528741775-53994a69daeb', 800),
  team2: u('photo-1507003211169-0a1dd7228f2d', 800),
  team3: u('photo-1519085360753-af0119f7cbe7', 800),
  team4: u('photo-1573496359142-b8d87734a5a2', 800),
  studioCraft: u('photo-1507679799987-c73779587ccf', 1200),
  studioPress: u('photo-1513542789411-b6a5d4f31634', 800),
  studioArchive: u('photo-1524758631624-e2822e304c36', 800),
};
