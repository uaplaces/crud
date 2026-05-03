<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="{{ Vite::asset('resources/css/app.css') }}" rel="stylesheet" />
<link rel="icon" href="{{ Vite::asset('resources/images/favicon.svg') }}">
@stack('styles')
<title>@lang($route . '.title')</title>