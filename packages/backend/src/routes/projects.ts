import express from 'express';

const router = express.Router();

// Get all projects for user
router.get('/', (req, res) => {
  res.json({ projects: [] });
});

// Create new project
router.post('/', (req, res) => {
  const { name, description } = req.body;
  res.json({ project: { id: '1', name, description } });
});

// Clone GitHub repo
router.post('/clone', (req, res) => {
  const { repoUrl } = req.body;
  res.json({ message: 'Clone initiated', repo: repoUrl });
});

export default router;
