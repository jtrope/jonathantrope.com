from django.test import TestCase


class ImageIndexViewTests(TestCase):

    def test_returns_images(self):
        resp = self.client.get('/api/images/')
        self.assertEqual(resp.status_code, 200)
        self.assertTrue(resp.json())
