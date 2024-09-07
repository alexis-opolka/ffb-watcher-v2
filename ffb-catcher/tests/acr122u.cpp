//
// Created by alexi on 06/07/2024.
//

#include "acr122u.h"

#include <functional>

#include "pch.h"

using namespace Windows::Devices;
using namespace Windows::Devices::Enumerations;
using namespace Windows::Devices::SmartCards;

namespace acr122u {

    void main {
        task<void> deviceTask = create_task(SmartCartReader::FromIdAsync(info->Id))
    }

} // acr122u