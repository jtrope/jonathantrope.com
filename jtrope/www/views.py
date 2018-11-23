from copy import deepcopy

from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render_to_response

from .images import IMAGES


def index(request):
    return render_to_response('www/index.html')


def images(request):
    url_prefix = settings.MEDIA_URL
    response = deepcopy(IMAGES)
    for image_data in response:
        image_data['url'] = url_prefix + image_data['file_name']

    return JsonResponse(response, safe=False)
