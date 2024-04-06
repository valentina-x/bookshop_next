import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).send({ error: true, message: 'Only POST method is allowed' });
        return;
    }

    const { email, password } = req.body;

    const validatedInfo = validate(email, password);

    if (validatedInfo.error) {
        res.status(400).send({ error: true, message: 'Email or password are incorrect' });
    } else {
        res.status(200).json({ success: true, token: 'testToken' });
    }
}

function validate(email: string, password: string) {
    // Пример простой валидации email и password на сервере
    if (!email || !password) {
        return { error: true, message: 'Email and password are required' };
    }

    if (password.length < 6) {
        return { error: true, message: 'Password must be at least 6 characters long' };
    }

    return { error: false };
}
