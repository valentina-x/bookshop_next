import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(405).send({ error: true, message: 'Only GET method is allowed' });
        return;
    }

    const { subject, page } = req.query;

    if (!subject) {
        res.status(400).send({
            error: true,
            message: 'No subject in query params'
        });
        return;
    }

    const gbooksReqParams = new URLSearchParams();
    gbooksReqParams.set('q', `Subject:${subject}`);
    gbooksReqParams.set('filter', `paid-ebooks`);
    gbooksReqParams.set('startIndex', page as string || '0');
    gbooksReqParams.set('maxResults', '6');

    try {
        const gbooksRes = await fetch(`https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}`);
        const booksData = await gbooksRes.json();
        res.status(200).json({ data: booksData });
    } catch (error) {
        console.error('Error fetching books data:', error);
        res.status(500).json({ error: true, message: 'Internal server error' });
    }
}
