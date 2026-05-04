<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
@vite('resources/css/app.css')
<link rel="icon" href="{{ Vite::asset('resources/images/favicon.svg') }}">
@stack('styles')
<title>@lang($route . '.title')</title>