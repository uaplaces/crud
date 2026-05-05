@extends('layouts.admin')
@section('content')
    <items></items>
@endsection
@push('scripts')
    @vite('resources/js/admin/items.js')
@endpush('scripts')
